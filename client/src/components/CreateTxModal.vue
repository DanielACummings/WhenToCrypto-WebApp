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
						<!-- Secret transaction checkbox -->
						<form>
							<div class="form-group text-left">
								<input v-model="secret" type="checkbox" id="secret" />
								<label for="secret">Secret Transaction</label>
							</div>
						</form>

						<!-- Normal Transactions -->
						<!-- Crypto or metal radio buttons -->
						<form v-if="secret==false">
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="crypto" />
							<label class="pr-5" for="crypto">Crypto</label>
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="metal" />
							<label for="metal">Metal</label>
						</form>
						<!-- Forms -->
						<div v-if="currencyType == 'crypto' && secret==false">
							<addCryptoTxForm />
						</div>
						<div v-if="currencyType == 'metal' && secret==false">
							<addMetalTxForm />
						</div>

						<!-- Secret Transactions -->
						<!-- Crypto or metal radio buttons -->
						<form v-if="secret==true">
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="crypto" />
							<label class="pr-5" for="crypto">Crypto</label>
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="metal" />
							<label for="metal">Metal</label>
						</form>
						<!-- Forms -->
						<div v-if="currencyType == 'crypto' && secret==true">
							<secretCryptoTx />
						</div>
						<div v-if="currencyType == 'metal' && secret==true">
							<secretMetalTx />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import addCryptoTxForm from "./forms/AddCryptoTxForm";
import addMetalTxForm from "./forms/AddMetalTxForm";
import secretCryptoTx from "./forms/SecretCryptoTx";
import secretMetalTx from "./forms/SecretMetalTx";

export default {
	name: "createTxForm",
	components: {
		addCryptoTxForm,
		addMetalTxForm,
		secretCryptoTx,
		secretMetalTx
	},
	data() {
		return {
			currencyType: "",
			secret: false
		};
	}
};
</script>