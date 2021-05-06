sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("smartShift.Table.controller.View1", {
		onInit: function () {
			var oModel = new JSONModel();
			var oTable = this.getView().byId("idTable");
			oModel.loadData("model/MockData/fruits.json");

			oTable.setModel(oModel);
		},
		onPress: function (oEvent) {
			debugger;
			var oItem = oEvent.getParameter("listItem");
			var sPath = oItem.getBindingContextPath();
			var aData = {
				"name": oEvent.getSource().getSelectedItem().getCells()[0].getText(),
				"benefit": oEvent.getSource().getSelectedItem().getCells()[1].getText(),
				"type": oEvent.getSource().getSelectedItem().getCells()[2].getText(),
				"availability": oEvent.getSource().getSelectedItem().getCells()[3].getText()
			};
			var oModel1 = new JSONModel();
			oModel1.setData(aData);
			// // this.getView().byId("idSimple").setModel(oModel1, "TestData");
			// sap.ui.getCore().setModel(oModel1, "TestData");

			this.getView().byId("idName").setValue(oModel1.oData.name);
			this.getView().byId("idBenefit").setValue(oModel1.oData.benefit);
			this.getView().byId("idType").setValue(oModel1.oData.type);
			this.getView().byId("idAvailability").setValue(oModel1.oData.availability);
		}
	});
});