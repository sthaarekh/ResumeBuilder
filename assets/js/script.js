function getValue(){
    let jfirstName = document.getElementById("dfirstName").value,   jlastName = document.getElementById("dlastName").value,
    jEmail = document.getElementById("dEmail").value,               jWebsite = document.getElementById("dWebsite").value,
    jLinkedIn = document.getElementById("dLinkedIn").value,         jFacebook = document.getElementById("dFacebook").value,
    jNumber = document.getElementById("dNumber").value,             jGithub = document.getElementById("dGithub").value,
    jTwitter = document.getElementById("dTwitter").value,           jInstagram = document.getElementById("dInstagram").value,
    jskill1= document.getElementById("dskill1").value,              jskill2= document.getElementById("dskill2").value,
    jskill3= document.getElementById("dskill3").value,              jskill4= document.getElementById("dskill4").value,
    jskill5= document.getElementById("dskill5").value,              jskill6= document.getElementById("dskill6").value,
    jinterest1= document.getElementById("dinterest1").value,        jinterest2= document.getElementById("dinterest2").value,
    jinterest3= document.getElementById("dinterest3").value,        jinterest4= document.getElementById("dinterest4").value,
    jinterest5= document.getElementById("dinterest5").value,        jinterest6= document.getElementById("dinterest6").value,
    jclgname= document.getElementById("dclgname").value,            jclgfy= document.getElementById("dclgfy").value,
    jclgty= document.getElementById("dclgty").value,                jclgqua= document.getElementById("dclgqua").value,
    jclgdesc= document.getElementById("dclgdesc").value,            jsclname= document.getElementById("dsclname").value,
    jsclfy= document.getElementById("dsclfy").value,                jsclty= document.getElementById("dsclty").value,
    jsclqua= document.getElementById("dsclqua").value,              jscldesc= document.getElementById("dscldesc").value,
    jexpog1= document.getElementById("dexpog1").value,              jexppost1 = document.getElementById("dexppost1").value,
    jexpdue1 = document.getElementById("dexpdue1").value,           jexpdesc1= document.getElementById("dexpdesc1").value,
    jexpog2= document.getElementById("dexpog2").value,              jexppost2 = document.getElementById("dexppost2").value,
    jexpdue2 = document.getElementById("dexpdue2").value,           jexpdesc2= document.getElementById("dexpdesc2").value,
    jptitle1= document.getElementById("dptitle1").value,            jplink1= document.getElementById("dplink1").value,
    jpdesc1= document.getElementById("dpdesc1").value,              jptitle2= document.getElementById("dptitle2").value,
    jplink2= document.getElementById("dplink2").value,              jpdesc2= document.getElementById("dpdesc2").value

    let jName = jfirstName.concat(" ", jlastName),
    jclgdate = jclgfy.concat(" to ", jclgty),
    jscldate = jsclfy.concat(" to ", jsclty)
    jexpdue1 = "Duration: " + jexpdue1
    jexpdue2 = "Duration: " + jexpdue2


    document.getElementById("rName").innerText = jName.toUpperCase();   document.getElementById("rEmail").innerText = jEmail;
    document.getElementById("rWebsite").innerText = jWebsite;           document.getElementById("rLinkedIn").innerText = jLinkedIn;
    document.getElementById("rFacebook").innerText = jFacebook;         document.getElementById("rNumber").innerText = jNumber;
    document.getElementById("rGithub").innerText = jGithub;             document.getElementById("rTwitter").innerText = jTwitter;
    document.getElementById("rInstagram").innerText = jInstagram;       
    document.getElementById("rskill1").innerText = jskill1;             document.getElementById("rskill2").innerText = jskill2;             
    document.getElementById("rskill3").innerText = jskill3;             document.getElementById("rskill4").innerText = jskill4;             
    document.getElementById("rskill5").innerText = jskill5;             document.getElementById("rskill6").innerText = jskill6;             
    document.getElementById("rinterest1").innerText = jinterest1;       document.getElementById("rinterest2").innerText = jinterest2;       
    document.getElementById("rinterest3").innerText = jinterest3;       document.getElementById("rinterest4").innerText = jinterest4;       
    document.getElementById("rinterest5").innerText = jinterest5;       document.getElementById("rinterest6").innerText = jinterest6;       
    document.getElementById("rclgname").innerText = jclgname;           document.getElementById("rclgdate").innerText = jclgdate;           
    document.getElementById("rclgqua").innerText = jclgqua;             document.getElementById("rclgdesc").innerText = jclgdesc;           
    document.getElementById("rsclname").innerText = jsclname;           document.getElementById("rscldate").innerText = jscldate;           
    document.getElementById("rsclqua").innerText = jsclqua;             document.getElementById("rscldesc").innerText = jscldesc;           
    document.getElementById("rexpog1").innerText = jexpog1;             document.getElementById("rexppost1").innerText = jexppost1;         
    document.getElementById("rexpdue1").innerText = jexpdue1;           document.getElementById("rexpdesc1").innerText = jexpdesc1;         
    document.getElementById("rexpog2").innerText = jexpog2;             document.getElementById("rexppost2").innerText = jexppost2;         
    document.getElementById("rexpdue2").innerText = jexpdue2;           document.getElementById("rexpdesc2").innerText = jexpdesc2;
    document.getElementById("rptitle1").innerText = jptitle1;           document.getElementById("rplink1").innerText = jplink1;
    document.getElementById("rpdesc1").innerText = jpdesc1;             document.getElementById("rptitle2").innerText = jptitle2;
    document.getElementById("rplink2").innerText = jplink2;             document.getElementById("rpdesc2").innerText = jpdesc2;
    document.getElementById("rexppost1").style.marginRight = "45px";
    document.getElementById("rexppost2").style.marginRight = "45px";
    $(".brprofile").show();
    $("i").show();
    $(".pdetails i").show();
    $(".restemp").show();
    $("#rDownload").show();
    // if(jskill1 == ""){
    //     console.log("Null Value")
    // }   
    let jsubmit = document.getElementById("btn")
    if (jsubmit.innerHTML=="Submit") jsubmit.innerHTML = "Update";
}

function printfun(){
    alert("USE LAPTOP FOR DOWNLOADING RESUME")
    print();
}