var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  primus.on('data', function(){
    alert('YO!');
  });

  // klikken op koala --> naar server sturen 
  document.querySelector(".ananas").addEventListener("click", function(e){
        // sturen naar server
        primus.write({ action: 'ananas'});
        e.preventDefault(); 
  });
  document.querySelector(".banana").addEventListener("click", function(e){
    // sturen naar server
    primus.write({ action: 'banana'});
    e.preventDefault(); 
});