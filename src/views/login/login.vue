<template>
	<div class="login-wrap">
		{{data.pageName}}
		<div>
			<Test :aaa= data.arr :my= data.myOrder></Test>
		</div>
	</div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
	@import "./login.scss";
</style>

