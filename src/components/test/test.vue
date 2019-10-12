<template>
	<div class="test-wrap">
		<p>{{ data.name }}</p>
		<p>{{ data.number }}</p>
		<p>{{ aaa }}</p>
		<p>{{ my }}</p>
		<select name="" @change="change()">
			<option v-for="item in data.arr" :key="item.value" :label="item.name" :value="item.name"></option>
		</select>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop, Model } from "vue-property-decorator"
	import { Getter, Action } from 'vuex-class'
	import { TestData } from '@/types/components/test.interface'
	// import {  } from "@/components" // 组件

	@Component({})
	export default class About extends Vue {
		// prop
		@Prop({
			required: false,
			default: '', 
		}) aaa!: string;

		@Prop({
			required: false,
			default: '', 
		}) my!: string;

		// data
		data: TestData = {
			componentName: 'test',
			name: '章三',
			number: 15978518103,
			arr: [
				{ name: '张三', age: 30, sex: '男', value: 2},
				{ name: '小芳', age: 20, sex: '女', value: 1},
				{ name: '李四', age: 28, sex: '男', value: 3},
			]
		}
		change(num){
			console.log(num);
		}

		created() {
			//
		}

		activated() {
			//
		}

		mounted() {
			//
		}

	}
</script>

<style lang="scss">
	@import "@/assets/scss/variables.scss";

	.test-wrap {
		width: 100%;
	}
</style>

