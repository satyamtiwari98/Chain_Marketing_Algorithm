// Chain Marketing Algorithm

var joiningAmount = 5000
var parentsCommission = 0
var resultParent = document.getElementById('resultParent')
var heading = document.getElementById('heading')
var result = document.getElementById('result')
var totalMembers = document.getElementById('totalMembers')


var parent = prompt("Enter Parent's Name :- ")


if(parent=='' || parent==null ) {

    alert("Try Again!!!")
    window.location.reload()

}else {

var yesORno = prompt("Do you want to add Child or not ???")

if(yesORno == 'y'||yesORno == 'Y') {

    var arrOfNames = prompt("Enter Childs name separated by ',' :- ")
    var names = arrOfNames.split(',')

    var childs = names.length

    parentsCommission = (joiningAmount*(10/100)*childs)


    for (let index = 0; index < names.length; index++) {
        if(names[index]==''){
            childs=childs-1
            continue
        }else{

        var tag = document.createElement("h3");
        var text = document.createTextNode(names[index]+" : "+joiningAmount*(5/100));
        tag.appendChild(text);
        result.appendChild(tag);
        }
        
    }


    heading.style.display = "block"
    totalMembers.innerHTML = "Total Members :- "+childs

    resultParent.innerHTML = parent+" : "+parentsCommission+"<br>"




}else if(yesORno == 'n'||yesORno == 'N') {

    parentsCommission = joiningAmount*(5/100)
    heading.style.display = "block"
    resultParent.innerHTML = parent+' : '+parentsCommission

    
}else {

    alert("Please enter a valid input!!!!")
    window.location.reload()

}

}