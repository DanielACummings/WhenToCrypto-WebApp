<template>
	<div class="create-tx-modal">
		<button
			type="button"
			class="btn btn-primary text-center"
			data-toggle="modal"
			data-target="#create-tx-modal"
			data-whatever="@getbootstrap"
		>Add Transaction</button>
		<div
			class="modal fade"
			id="create-tx-modal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="create-tx-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="modal-title" id="create-tx-modal-label">
							<h5>Add Transaction</h5>
						</div>
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
						<!-- Add crypto transaction form -->
						<div v-if="currencyType == 'crypto'">
							<addCryptoTxForm />
						</div>
						<!-- Add metal transaction form -->
						<div v-if="currencyType == 'metal'">
							<addMetalTxForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import addCryptoTxForm from "./AddCryptoTxForm";
import addMetalTxForm from "./AddMetalTxForm";

export default {
	name: "createTxForm",
	components: {
		addCryptoTxForm,
		addMetalTxForm
	},
	data() {
		return {
			currencyType: ""
		};
	}
};
</script>

<style>
</style>