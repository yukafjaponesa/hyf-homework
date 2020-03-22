src="cleave.js"
const cc_type = 'unknown';
const cleave = new Cleave('#input-cc', {
  creditCard: true,
  delimiter: '-',
  onCreditCardTypeChanged: function(type) {
    console.log(type);
    cc_type = type;
  }
});

$('#check-cc').click(function(){
  alert(cleave.getFormattedValue() + ' is a ' + cc_type + ' card');
});
