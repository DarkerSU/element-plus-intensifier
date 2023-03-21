<template>
    <IUpload 
        :maxShowListHeight="50" 
        :multiple="true" 
        list-type="picture" 
        :file-list="fileList" >
        <el-button type="primary">上传文件</el-button>
    </IUpload>
   
</template>
<script setup lang="ts">
import { IUpload } from 'element-plus-intensifier';
import { reactive } from 'vue';

let fileList = reactive([
    {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg",
    },
    {
        name: "plant-1.png",
        url: "https://img.tukuppt.com/photo-big/00/00/94/6152bc0ce6e5d805.jpg",
    },
    {
        name: "food.jpeg",
        url: "https://www.ssfiction.com/wp-content/uploads/2020/08/20200805_5f2b1669e9a24.jpg",
    },
])
</script>