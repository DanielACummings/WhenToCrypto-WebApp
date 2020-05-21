<template>
	<div class="crypto-comp col-12 col-md-6 col-lg-4 pb-3">
		<div class="card" style="width: 18rem;">
			<button
				id="deleteBtn"
				@click="deleteCrypto(cryptoProp.id)"
				class="btn btn-sm btn-warning text-right"
			>X</button>
			<div class="card-body">
				<h3 class="card-title">{{cryptoProp.name}}</h3>
				<p>{{cryptoProp.description}}</p>
				<img :src="cryptoProp.img" class="card-img" alt="crypto image" />
				<div class="row text-center pt-1">
					<div
						class="col-12 text-center pt-1"
					>Balance: {{parseFloat((cryptoProp.totalOwned).toFixed(8))}}</div>
					<div class="col-12 text-center pt-1">
						Average value of balance:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
						{{parseFloat((cryptoProp.localValAv * cryptoProp.totalOwned).toFixed(2))}}
					</div>
					<div class="col-12 text-center pt-1">
						Average value per coin:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
						{{(cryptoProp.localValAv).toFixed(2)}}
					</div>
					<div class="col-12 pt-1">Notes: {{cryptoProp.notes}}</div>
					<!-- Buttons -->
					<div class="col-12 pt-2">
						<div class="row">
							<!-- Market value button -->
							<div>
								<button class="btn btn-sm btn-primary ml-4 mr-3">
									<a
										target="_blank"
										:href="baseURL + cryptoProp.name.replace(' ', '-').toLowerCase() + '/'"
										id="market-val-btn"
									>Market Value</a>
								</button>
							</div>
							<!-- Ledger button -->
							<div>
								<router-link :to="{name: 'cryptoLedger', params: {cryptoId: cryptoProp.id}}">
									<button class="btn btn-sm btn-primary mr-3">Ledger</button>
								</router-link>
							</div>
							<!-- Edit/close button & form -->
							<button
								v-if="showForm == 'closed'"
								@click="showForm = 'open'"
								class="btn btn-sm btn-primary"
							>Edit</button>
							<button v-else @click="showForm = 'closed'" class="btn btn-sm btn-primary">Close</button>
							<form v-if="showForm == 'open'" @submit.prevent="editCrypto" class="text-left">
								<p class="pt-4 text-center">Edit</p>
								<!-- Name -->
								<div class="form-group">
									<label for="name" class="col-form-label">
										Name:
										<br />(Used in "Market Value" link. Please choose an actual crypto name. If name contains spaces, use "-"s instead)
									</label>
									<input
										type="text"
										v-model="editedCrypto.name"
										class="form-control"
										id="name"
										placeholder="Not Case Sensitive"
									/>
								</div>
								<!-- Description -->
								<div class="form-group">
									<label for="description" class="col-form-label">Description:</label>
									<input
										type="text"
										v-model="editedCrypto.description"
										class="form-control"
										id="description"
									/>
								</div>
								<!-- Image -->
								<div class="form-group">
									<label for="img" class="col-form-label">Image URL (Web Address):</label>
									<input type="text" v-model="editedCrypto.img" class="form-control" id="img" />
								</div>
								<!-- Notes -->
								<div class="form-group">
									<label for="notes" class="col-form-label">Notes:</label>
									<input type="text" v-model="editedCrypto.notes" class="form-control" id="notes" />
								</div>
								<!-- Buttons -->
								<button @click="closeForm" type="submit" class="btn btn-primary">Submit</button>
								<button
									@click="showForm = 'closed'"
									type="button"
									class="btn btn-warning"
									data-dismiss="modal"
								>Close</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "cryptocurrency",
	props: ["cryptoProp"],
	data() {
		return {
			baseURL: "https://coinmarketcap.com/currencies/",
			showForm: "closed",
			editedCrypto: {
				name: "",
				description: "",
				img: "",
				notes: "",
				id: this.cryptoProp.id
			}
		};
	},
	methods: {
		closeForm() {
			this.showForm = "closed";
		},
		editCrypto() {
			let update = { ...this.editedCrypto };
			this.$store.dispatch("editCrypto", update);
			this.editedCrypto = {
				name: "",
				description: "",
				img: "",
				notes: "",
				id: this.cryptoProp.id
			};
		},
		deleteCrypto(id) {
			this.$store.dispatch("deleteCrypto", id);
		}
	}
};
</script>

<style scoped>
.card {
	background: rgb(27, 26, 26);
}
.crypto-comp {
	color: #00bc8c;
}
#curr-symbol {
	display: inline;
	margin-right: -3px;
}
#market-val-btn {
	color: white;
}
#deleteBtn {
	margin-left: 260px;
}
</style>