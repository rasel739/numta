// Unlimited Numat

function numata() {

    var arrNumata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var numataValue = document.getElementById('input_value').value;

    var outputHTML = '';
    outputHTML += '<table>'
    for (var i = 0; i < arrNumata.length; i++) {



        arrNumata[i] = arrNumata[i] * numataValue;

        outputHTML += '<tr>';

        outputHTML += '<td>' + numataValue + '</td>'

        outputHTML += '<td>' + '×' + ' ' + (i + 1) + '</td>'

        outputHTML += '<td>' + ' = ' + '</td>'

        outputHTML += '<td style="color:green">' + arrNumata[i] + '</td>';

        outputHTML += '</tr>';



    }
    outputHTML += '</table>';

    if(numataValue == 0){

         document.getElementById('input_numata_show').innerHTML = '<span style = "color:green">Please Enter Value!</span>';

    }else if (numataValue < 0 ||  numataValue<=5000000 ) {

       

         document.getElementById('input_numata_show').innerHTML = outputHTML;
    
    } else if(numataValue>=5000000) {

         document.querySelector('.input_numata_show').innerHTML = '<span style = "color:orange">This Value is Not Allowed</span>'+'<span style="color:red">!</span>';
       
    }else{
       document.querySelector('.input_numata_show').innerHTML = '<span style = "color:red">This Value is Wrong!</span>';
           
    }



};