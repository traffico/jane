$(document).ready(function(){
    $("#replies-one").click(function(){
      $('#message-one-section').toggle();
    });

    $("#replies-two").click(function(){
        $('#message').toggle();
      });

      $("#replies-three").click(function(){
        $('#message3').toggle();
      });

    $('#subscribe-btn').click(function(){
        $('#subscribe-pop').show('slow')
    })

    $('#closebtn').click(function(){
        $('#subscribe-pop').hide('slow')
    })

    // $('form').onSubmit(function(){
    //     $('#subscribe-pop').hide('slow')
    // })

    // $().click(function(){
    //     $('#subscribe-pop').hide()
    // })

  });
document.getElementById('like').addEventListener('click', function(){
    this.innerHTML = '✓ liked'
})

document.getElementById('like2').addEventListener('click', function(){
    this.innerHTML = '✓ liked'
})

document.getElementById('like3').addEventListener('click', function(){
    this.innerHTML = '✓ liked'
})
