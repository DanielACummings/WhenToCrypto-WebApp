<template>
	<div class="edit-currency-modal">
		<button
			type="button"
			class="btn btn-primary text-center"
			data-toggle="modal"
			data-target="#edit-currency-modal"
			data-whatever="@getbootstrap"
		>Edit Currency</button>

		<div
			class="modal fade"
			id="edit-currency-modal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="edit-currency-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="edit-currency-modal-label">Edit Currency</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="crypto" />
							<label class="pr-5" for="crypto">Crypto</label>
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="metal" />
							<label for="metal">Metal</label>
						</form>
						<p class="text-left">Any field can be left blank</p>
						<div v-if="currencyType == 'crypto'">
							<editCryptoForm />
						</div>
						<div v-if="currencyType == 'metal'">
							<editMetalForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import editCryptoForm from "./EditCryptoForm";
import editMetalForm from "./EditMetalForm";

export default {
	name: "editCurrencyModal",
	components: {
		editCryptoForm,
		editMetalForm
	},
	data() {
		return {
			currencyType: ""
		};
	},
	methods: {}
};
</script>