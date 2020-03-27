<template>
	<div class="home container">
		<div class="row">
			<div class="col">
				<h1 class="pb-4 pt-5 console-green">Tracked Cryptos</h1>
			</div>
		</div>
		<!-- Add crypto modal -->
		<div class="row text-center">
			<div class="col-12">
				<button
					type="button"
					class="btn btn-secondary text-center"
					data-toggle="modal"
					data-target="#add-crypto-modal"
					data-whatever="@getbootstrap"
				>Add a Crypto</button>

				<div
					class="modal fade"
					id="add-crypto-modal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="add-crypto-modal-label"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="add-crypto-modal-label">Add a Crypto</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="addCrypto" class="text-left">
									<div class="form-group">
										<label for="name" class="col-form-label">Name:</label>
										<input type="text" v-model="newCrypto.name" class="form-control" id="name" required />
									</div>
									<div class="form-group">
										<label for="img" class="col-form-label">Image URL (Web Address):</label>
										<input
											type="text"
											v-model="newCrypto.img"
											class="form-control"
											id="img"
											placeholder="Optional"
										/>
									</div>
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
									<button type="submit" class="btn btn-dark">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<!-- public keeps inserted here -->
			<crypto v-for="keep in publicKeeps" :key="keep.id" :keepProp="keep" />
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
			newCrypto: {
				name: "",
				img: ""
			}
		};
	},
	computed: {
		boards() {
			return this.$store.state.boards;
		}
	},
	methods: {
		addCrypto() {
			this.$store.dispatch("addBoard", this.newCrypto);
			this.newCrypto = { title: "", description: "" };
		},
		deleteCrypto(deleteCrypto) {
			let close = confirm("Are you sure you\nwant to delete this?");
			if (close == true) {
				this.$store.dispatch("deleteCrypto", deleteCrypto);
			}
		}
	}
};
</script>

<style></style>