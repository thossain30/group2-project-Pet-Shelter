// edit this to add animal adopt date
var date = document.getElementById('countdown').getAttribute('data-date');
console.log(date);
var end =  new Date(date);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    const id = document.getElementById('countdown').getAttribute('data-id');
    function showRemaining() {
        var now = new Date();
        var distance = end - now;

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        if (distance < 0) {
          days += 100;
            // clearInterval(timer);
            // document.getElementById('countdown').innerHTML = 'Time is up';
            // const response = async (event) => { await fetch(`api/animals/animal/${id}`, {
            //        method:'DELETE',
            //        headers: { 'Content-Type': 'application/json' },
            //      });
            //      console.log('RESPONSE:',response)
            //      if (response.ok) {
            //        console.log(`Pet with id: ${id} is no longer available for adoption.`)
            //        document.location.replace('/');
                  
            //      } else {
            //        alert(response.statusText," Failed to delete pet");
            //      }
            // }
            return;
        }

        document.getElementById('countdown').innerHTML = days + ' days, ';
        document.getElementById('countdown').innerHTML += hours + ' hrs, ';
        document.getElementById('countdown').innerHTML += minutes + ' mins, ';
        document.getElementById('countdown').innerHTML += seconds + ' secs';
    }

    timer = setInterval(showRemaining, 1000);