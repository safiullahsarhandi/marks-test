<template>
    <div class="formDiv">
      <Form ref="form" @submit="onSubmit" :initial-values="{...data}" :validation-schema="schema">
        <table class="form-spacing">
        <tr>
          <td class="cell-one">Passing Marks:</td>
          <td class="cell-two">60/100</td>
        </tr>
        <tr>
          <td class="cell-one">* Full Name:</td>
          <td class="cell-two"><Field name="name" type="text" class="big-field" /><ErrorMessage name="name"/></td>
        </tr>
        <tr>
          <td class="cell-one">* Marks:</td>
          <td class="cell-two"><Field name="marks" type="text" class="big-field" /><ErrorMessage name="marks"/></td>
        </tr>
        <tr>
          <td valign="top" class="cell-one">Fee Paid:</td>
          <td class="two-cells">
            <Field :value="true" type="radio" name="feePaid"/>Yes
            <Field :value="false" name="feePaid" type="radio"/>
            <ErrorMessage name="feePaid"/>
          </td>
        </tr>
        <tr>
          <td class="cell-one">&nbsp;</td>
          <td class="cell-two">
            <button class="standardButton" type="submit">Submit</button>
          </td>
        </tr>
      </table>
      </Form>
    </div>
</template>
<script setup>
  import {Form,Field,ErrorMessage} from 'vee-validate';
import { watch,ref } from "vue";
import * as yup from 'yup';
import { createUser, updateUser } from '../Services/User';
const schema = yup.object({
  name : yup.string().required(),
  marks : yup.string().required(),
  feePaid : yup.string().required(),
});
const props = defineProps({
  user : {
    type : Object,
    default : ()=> ({}),
  }
});
const emit = defineEmits(['created']);
let data = ref({
  feePaid : true,
});

const form = ref(null);
watch(()=> props.user,(value)=> {
  if(value._id){
    data.value = value;
  } 

});

const onSubmit = async (values)=> {
  console.log(values);
  try {
    if(props.user?._id){
      let {message}  = await updateUser(props.user?._id,values)
      alert(message);
    }else{
      let {message}  = await createUser(values)
      alert(message);
    }
    data.value = {};
    emit('created');
    form.value.resetForm({
      feePaid : true,
    });
  } catch (error) {    
      alert(error.message);
  }
}
</script>