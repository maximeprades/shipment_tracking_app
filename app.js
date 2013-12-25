(function() {

  return {

    events: {
      'app.activated'                        :   'getShipmentID',
      'ticket.custom_field_23796486.changed' :   'getShipmentID',
      'click .enternewid'                    :   'newShipmentID'
    },

    getShipmentID: function() {
      var shipmentID = this.ticket().customField('custom_field_' + this.settings.shipment_id_field);
      this.switchTo('main',
          {
            data: shipmentID
          });
    },

    newShipmentID: function() {
      this.switchTo('newshipment');
    }

  };

}());
