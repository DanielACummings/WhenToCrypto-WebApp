<template>
	<div class="create-currency-modal">
		<button
			type="button"
			class="btn btn-primary text-center"
			data-toggle="modal"
			data-target="#create-currency-modal"
			data-whatever="@getbootstrap"
		>Add Currency</button>

		<div
			class="modal fade"
			id="create-currency-modal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="create-currency-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="create-currency-modal-label">Add Currency</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<!-- Crypto or metal radio buttons -->
						<form>
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="crypto" />
							<label class="pr-5" for="crypto">Crypto</label>
							<input v-model="currencyType" type="radio" name="crypto-or-metal" value="metal" />
							<label for="metal">Metal</label>
						</form>
						<!-- Forms -->
						<div v-if="currencyType == 'crypto'">
							<createCryptoForm />
						</div>
						<div v-if="currencyType == 'metal'">
							<createMetalForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import createCryptoForm from "./CreateCryptoForm";
import createMetalForm from "./CreateMetalForm";

export default {
	name: "createCurrencyModal",
	components: {
		createCryptoForm,
		createMetalForm
	},
	data() {
		return {
			currencyType: ""
		};
	}
};
</script>