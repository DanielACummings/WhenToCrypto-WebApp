<template>
	<div class="metal-comp col-12 col-md-6 col-lg-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h3 class="card-title">{{metalProp.name}}</h3>
				<p>{{metalProp.description}}</p>
				<img :src="metalProp.img" class="card-img" alt="metal image" />
				<div class="row text-center pt-1">
					<div
						class="col-12 text-center pt-1"
					>Balance in {{metalProp.measurement.toLowerCase()}}: {{parseFloat((metalProp.totalOwned).toFixed(8))}}</div>
					<div class="col-12 text-center pt-1">
						Average value of balance:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
						{{parseFloat((metalProp.localValAv * metalProp.totalOwned).toFixed(2))}}
					</div>
					<div class="col-12 text-center pt-1">
						Average value per {{metalProp.measurement.slice(0, -1).toLowerCase()}}:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
						{{(metalProp.localValAv).toFixed(2)}}
					</div>
					<div class="col-12 pt-1">Notes: {{metalProp.notes}}</div>
					<!-- Buttons -->
					<div class="col-12 pt-2">
						<div class="row">
							<!-- Market value button -->
							<div>
								<button class="btn btn-sm btn-primary ml-4 mr-3">
									<a
										target="_blank"
										:href="baseURL + metalProp.name.toLowerCase() + '-price/'"
										id="market-val-btn"
									>Market Value</a>
								</button>
							</div>
							<!-- Ledger button -->
							<div>
								<router-link :to="{name: 'metalLedger', params: {metalId: metalProp.id}}">
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
							<form v-if="showForm == 'open'" @submit.prevent="editMetal" class="text-left">
								<p class="pt-4 text-center">Edit</p>
								<!-- Description -->
								<div class="form-group">
									<label for="description" class="col-form-label">Description:</label>
									<input type="text" v-model="editedMetal.description" class="form-control" id="description" />
								</div>
								<!-- Image -->
								<div class="form-group">
									<label for="img" class="col-form-label">Image URL (Web Address):</label>
									<input type="text" v-model="editedMetal.img" class="form-control" id="img" />
								</div>
								<!-- Notes -->
								<div class="form-group">
									<label for="notes" class="col-form-label">Notes:</label>
									<input type="text" v-model="editedMetal.notes" class="form-control" id="notes" />
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
	name: "metal",
	props: ["metalProp"],
	data() {
		return {
			baseURL: "https://goldsilver.com/price-charts/",
			showForm: "closed",
			editedMetal: {
				description: "",
				img: "",
				notes: "",
				id: this.metalProp.id
			}
		};
	},
	methods: {
		closeForm() {
			this.showForm = "closed";
		},
		editMetal() {
			let update = { ...this.editedMetal };
			this.$store.dispatch("editMetal", update);
			this.editedMetal = {
				description: "",
				img: "",
				notes: "",
				id: this.metalProp.id
			};
		}
	}
};
</script>

<style>
.card {
	background: rgb(27, 26, 26);
}
.metal-comp {
	color: #00bc8c;
}
#curr-symbol {
	display: inline;
	margin-right: -3px;
}
#market-val-btn {
	color: white;
}
</style>