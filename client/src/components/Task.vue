<template>
	<div class="col-12">
		<div class="style-tasks row pb-2">
			<button @click="deleteTask" class="btn btn-warning btn-sm">X</button>
			<h5 id="task" class="col text-center">{{taskData.description}}</h5>
			<div id="move-btn" class="dropdown">
				<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
					Move
					<span class="caret"></span>
				</button>
				<ul class="dropdown-menu">
					<div v-for="list in lists" :key="list.id">
						<button class="dropdown-item" @click="moveTask(list.id)">{{list.title}}</button>
					</div>
				</ul>
			</div>
		</div>
		<div v-for="comment in comments" :key="comment.id">
			<div class>
				<comment class :commentData="comment" />
			</div>
		</div>
		<form @submit.prevent="createComment" class="form-body pt-2">
			<input v-model="comment.content" type="text" placeholder="Add comment" required />
			<button type="submit" class="btn btn-primary btn-sm">+</button>
		</form>
		<hr />
	</div>
</template>

<script>
import comment from "@/components/Comment";
export default {
	name: "task",
	props: ["taskData"],
	mounted() {
		return this.$store.dispatch("getComments", this.taskData);
		console.log("this.taskdata", this.taskData);
	},
	data() {
		return {
			comment: {
				content: "",
				taskId: this.taskData.id,
				authorId: this.taskData.authorId
			}
		};
	},
	methods: {
		deleteTask() {
			this.$store.dispatch("deleteTask", this.taskData);
		},
		createComment() {
			let newComment = { ...this.comment };
			this.$store.dispatch("createComment", newComment);
			this.comment.content = "";
		},

		moveTask(listId) {
			let moveData = {
				task: this.taskData,
				newListId: listId
			};
			this.$store.dispatch("moveTask", moveData);
		}
	},
	computed: {
		lists() {
			return this.$store.state.lists;
		},
		comments() {
			return this.$store.state.comments[this.taskData.id];
		}
	},

	components: {
		comment
	}
};
</script>

<style>
.style-tasks {
	text-align: left;
}
</style>