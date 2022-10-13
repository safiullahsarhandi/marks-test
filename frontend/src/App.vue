<template>
  <div>
    <CreateForm @created="fetch" :user="editingUser" />

    <div class="main-grid">
      <button @click="deleteAll" class="standardButton" type="submit" value="Delete">Delete</button>


      <table class="gridTable" cellspacing="0" cellpadding="0">
        <tr :class="{'alternateRowColor' : (userIndex % 2)}" :key="userIndex" v-for="(user, userIndex) in users">
          <td style="width: 20px" class="heading-cell"><input :value="user._id" v-model="selectedIds" type="checkbox" ></td>
          <td class="heading-cell">{{user.name}}</td>
          <td class="heading-cell">{{user.marks}}</td>
          <td class="heading-cell">{{user.feePaid?'Paid':'UnPaid'}}</td>
          <td class="heading-cell">{{getPassingDetail(user)}}</td>
          <td class="heading-cell">
            <button @click="editUser(user)">Edit</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
  import CreateForm from './components/CreateForm.vue';
import { getUsers,deleteUsers } from "./Services/User";
import { onBeforeMount, ref } from "vue";
const users = ref([]);
const selectedIds = ref([]);
const editingUser = ref({});
const fetch = async () => {
  try {
    let { data } = await getUsers();
    users.value = data;
  } catch (error) {
    console.log(error);
  }
};

const editUser = (detail)=> {
  editingUser.value = detail;
};
const deleteAll = async ()=> {
    try {
      let {message} =  await deleteUsers({ids : selectedIds.value});
      alert(message);
      fetch();
      // selectedIds.forEach((id)=> );
    } catch (error) {
        alert(error.message);
    }
}
const getPassingDetail = (user)=> {
    return user.feePaid && user.marks >= 60 ?'Pass' : 'Fail';
};
onBeforeMount(() => {
  fetch();
});
</script>