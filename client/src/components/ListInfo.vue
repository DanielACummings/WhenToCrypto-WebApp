<template>
	<div class="card mt-5 mb-5 pb-3" style="width: 18rem;">
		<div class="card-body">
			<div class="row">
				<div class="col-3">
					<button @click="deleteList(listData)" id="delete-list" class="btn btn-sm btn-warning">X</button>
				</div>
				<div class="col-6">
					<h4 class="card-title list-title">{{listData.title}}</h4>
				</div>
			</div>
			<form @submit.prevent="createTask">
				<input v-model="task.description" type="text" placeholder="Add task" />
				<button type="submit" class="btn btn-sm btn-primary">+</button>
			</form>
		</div>
		<div v-for="task in tasks" :key="task.id" class="pt-3">
			<task :taskData="task" />
		</div>
	</div>
</template>

<script>
import task from "@/components/Task";

export default {
	name: "ListInfo",
	props: ["listData"],
	components: {
		task
	},
	mounted() {
		return this.$store.dispatch("getTasks", this.listData);
	},
	data() {
		return {
			task: {
				description: "",
				listId: this.$props.listData.id,
				authorId: this.$store.state.user._id,
				boardId: this.$props.listData.boardId
			}
		};
	},
	methods: {
		deleteList(data) {
			this.$store.dispatch("deleteList", data);
		},
		// task methods
		createTask() {
			let newTask = { ...this.task };
			this.$store.dispatch("createTask", newTask);
			this.task.description = "";
		}
	},
	computed: {
		tasks() {
			return this.$store.state.tasks[this.listData.id];
		}
	}
};
</script>

<style scoped>
#delete-list {
	margin-left: 5px;
}
</style>
