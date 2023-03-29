<script setup>
import { ref } from 'vue'

const slideNumber = ref(0)
const data = [
    {
        name: 'Quiz app',
        language : [
          ['Vue', '60.1%'],
          ['CSS', '20.1%'],
          ['JavaScript', '9.6%']
        ]
    },
    {
    name: 'Quiz App',
    languages: [
      ['React', '60.2%'],
      ['CSS', '30.1%'],
      ['JavaScript', '9.7%']
    ]
  },
  {
    name: 'Paint App',
    languages: [
      ['Angular', '50.0%'],
      ['CSS', '40.0%'],
      ['JavaScript', '10.0%']
    ]
  }
    
]
</script>
<template>
    <h1>{{ data[slideNumber].name }}</h1>
    <p>
        {{ language[0] }}
    </p>
</template>