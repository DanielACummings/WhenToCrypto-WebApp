<template>
	<div class="boards">
		<div class="container">
			<div class="row">
				<div class="col-12 text-right pt-5">
					<button @click="logout" class="btn btn-danger text-right">Logout</button>
				</div>
				<div class="col-12">
					<h1 class="pb-4">Boards</h1>
				</div>
			</div>
			<!-- Create board modal -->
			<div class="row text-center">
				<div class="col-12">
					<button
						type="button"
						class="btn btn-primary text-center"
						data-toggle="modal"
						data-target="#add-board-modal"
						data-whatever="@getbootstrap"
					>Add Board</button>

					<div
						class="modal fade"
						id="add-board-modal"
						tabindex="-1"
						role="dialog"
						aria-labelledby="add-board-modal-label"
						aria-hidden="true"
					>
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="add-board-modal-label">Add Board</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form @submit.prevent="addBoard" class="text-left">
										<div class="form-group">
											<label for="title" class="col-form-label">Title:</label>
											<input type="text" v-model="newBoard.title" class="form-control" id="title" required />
										</div>
										<div class="form-group">
											<label for="description" class="col-form-label">Description:</label>
											<input type="text" v-model="newBoard.description" class="form-control" id="description" />
										</div>
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="submit" class="btn btn-primary">Submit</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="text-left ml-5 mt-5" v-for="board in boards" :key="board._id">
						<button @click="deleteBoard(board._id)" class="btn btn-secondary">X</button>
						<router-link
							class="text-dark"
							:to="{name: 'board', params: {boardId: board._id}}"
						>{{board.title}}</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "boards",
	mounted() {
		this.$store.dispatch("getBoards");
	},
	data() {
		return {
			newBoard: {
				title: "",
				description: ""
			}
		};
	},
	computed: {
		boards() {
			return this.$store.state.boards;
		}
	},
	methods: {
		addBoard() {
			this.$store.dispatch("addBoard", this.newBoard);
			this.newBoard = { title: "", description: "" };
		},
		logout() {
			this.$store.dispatch("logout");
		},
		deleteBoard(deleteBoard) {
			let close = confirm("Are you sure you\nwant to delete this?");
			if (close == true) {
				this.$store.dispatch("deleteBoard", deleteBoard);
			}
		}
	}
};
</script>

<style>
body {
	background-image: url("https://images.unsplash.com/photo-1578167597239-14f8fc680b6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2156&q=80");
}
</style>