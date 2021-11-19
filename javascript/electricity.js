function populate(s1,s2)
{
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);

    s2.innerHTML="";
    
    if(s1.value=="ap")
    {
        var optionArray=['central|Central Power Distribution of A.P Ltd(APCPDCL)','eastern|Eastern Power Distribution Company of Andhra Pradesh Ltd','southern|Southern Power Distribution Company of A.P Ltd(APSPDCL)'];
   }
   else if(s1.value=="aru")
   {
       var optionArray=['department|Department of Power,Government of Arunachal Pradesh'];
   }
   else if(s1.value=="assam")
   {
       var optionArray=['assam|Assam Power Distibution Company Ltd.(APDCL)'];
   }
   else if(s1.value=="bihar")
   {
       var optionArray=['north|North Bihar Power Distribution','south|South Bihar Power Distribution'];
   }
   else if(s1.value=="chandi")
   {
       var optionArray=['electricity|Electricity Department Chandigarh'];
   }
   else if(s1.value=="chatti")
   {
       var optionArray=['chattisgarh|Chhattisgarh State Power Distribution Company Ltd.(CSPDCL)'];
   }
   else if(s1.value=="dan")
   {
       var optionArray=['dnh|DNH Power Distribution Limited'];
   }
   else if(s1.value=="dad")
   {
       var optionArray=['daman|Daman and Diu Electricity'];
   }
   else if(s1.value=="goa")
   {
       var optionArray=['goa|Goa Electricity Department'];
   }
   else if(s1.value=="gujrat")
   {
       var optionArray=['dakshin|Dakshin Gujrat Vij Comapny limited','gift|Gift Power Compay Limited','madhya|Madhya Gujrat Vij Company  Limited','paschim|Paschim Gujarat Vij Company Limited','torrent|Torrent Power Ltd.','uttar|Uttar Gujrat Vij Company Limited'];
   }
   else if(s1.value=="haryana")
   {
       var optionArray=['dakshin|Dakshin Haryana Bijli Vitran Nigam(DHBVN)','uttar|Uttar Haryana Bijili Vitran Nigam(UHBVN)'];
   }
   else if(s1.value=="hp")
   {
       var optionArray=['himachal|Himachal Pradesh State Electricity Board Ltd(HPSEBL)'];
   }
   else if(s1.value=="jk")
   {
       var optionArray=['jammu|Jammu and Kashmir Power Development Department'];
   }
   else if(s1.value=="jhar")
   {
       var optionArray=['jamshedpur|jamshedpur Utilies & Services Company Ltd(JUSCO)','jharkhand|Jharkhand Bijli Vitran Nigam Limited(JBVNL)'];
   }
   else if(s1.value=="kar")
   {
       var optionArray=['banglore|Bangalore Electricity Supply Company Ltd.(BESCOM)','chamundeshwari|Chamundeshwari Electricity Supply Corporation Ltd.(Cesc,Mysore)','gulbarga|Gulbarga Electricity Supply Company Ltd.(GESCOM)','hubbli|Hubli Electricity Supply Company Ltd.(HESCOM)','mangalore|Mangalore Electricity Supply Company Ltd.(MESCOM)'];
   }
   else if(s1.value=="kera")
   {
       var optionArray=['kannam|Kannan Devan Hills Plantations Company Private Limited','kerala|Kerala State Electricity Board Ltd.(KESB)','thrissur|Thrissur Corporation electricity Department(TCED)'];
   }
   else if(s1.value=="laks")
   {
       var optionArray=['lakshdweep|Lakshadweep Electeicity Department'];
   }
   else if(s1.value=="mp")
   {
       var optionArray=['mp|MP Madhya Kshetra Vidhut Vitran Bhopal','mpp|MP Poorv Kshetra Vidhut Vitran Jabalpur','madhya|Madhya Pradesh Pachim Kshetra Vidhyut Vitran Company Ltd.(MPPKVVCL)'];
   }
   else if(s1.value=="mah")
   {
       var optionArray=['adani|Adani Electricity','best|BEST','mahavitran|Mahavitran Maharastra State Electicity Distribution Company Ltd.(MSEDCL)','tata|Tata Power -Mumbai','torrent|Torrent Power Ltd'];
   }
   else if(s1.value=="man")
   {
       var optionArray=['manipur|Manipur State Power Distribution Company ltd.(MSPDCL)'];
   }
   else if(s1.value=="meg")
   {
       var optionArray=['meghalaya|Meghalaya Power Dist Corp Ltd.'];
   }
   else if(s1.value=="miz")
   {
       var optionArray=['power|Power & Electricity Department Mizoram'];
   }
   else if(s1.value=="nag")
   {
       var optionArray=['department|Department of Power ,Nagaland'];
   }
   else if(s1.value=="delhi")
   {
       var optionArray=['rajdhni|BSES Rajdhani-Delhi','yamuna|BSES Yamuna-Delhi','municipal|New Delhi municipal Council(NDMC)','tata|Tata Power-DDL'];
   }
   else if(s1.value=="odisha")
   {
       var optionArray=['southco|SOUTHCO Utility','central|TP Cental Odisha Distribution Limited','northern|TP Northrn odisha Distibution Ltd','wesco|WESCO UTILITY'];
   }
   else if(s1.value=="pond")
   {
       var optionArray=['government|Government of Punducherry Electricity Deparment'];
   }
   else if(s1.value=="punjab")
   {
       var optionArray=['punjab|Punjab State Power Corporation Ltd.(PSPCL)'];
   }
   else if(s1.value=="raj")
   {
       var optionArray=['ajmer|Ajmer Vidyut Vitran Nigam Ltd.(AVVNL)','bharatpur|Bharatpur Electricity Services Ltd(BESL)','bikaner|Bikaner electricity Supply Limited','jaipur|Jaipur Vidyut Vitran Nigam Ltd(JVVNL)','jodhpur|Jodhpur Vidyut Vitran Nigam Ltd(JDVVNL)','kota|Kota Electricity Ltd.(KEDL)','tp|TP Ajmer Distribution Ltd(TPADL)'];
   }
   else if(s1.value=="sikkim")
   {
       var optionArray=['sikkim|Sikkim Power'];
   }
   else if(s1.value=="tn")
   {
       var optionArray=['tamilnadu|Tamil Nadu Electricity Board(TNEB)'];
   }
   else if(s1.value=="tel")
   {
       var optionArray=['co|Co-Operative Electric Supply Society Ltd.(CESS Ltd),Sircilla','northern|Northrn Power Distribution Comapny of Telangana Limited(TSNPDCL)','telangana|Telangana State Southern Power Ditribution Company Ltd(TSSPDCL)','tsspdcl|Tsspdcl-Prepaid Meter Recharge'];
   }
   else if(s1.value=="tri")
   {
       var optionArray=['tripura|Tripura Electricity Corp Ltd'];
   }
   else if(s1.value=="up")
   {
       var optionArray=['kanpur|Kanpur Electricity Supply Company','noida|Noida Power Company Ltd.(NPCL)','tp|TP Renewables Microgrid Ltd.'];
   }
   else if(s1.value=="ut")
   {
       var optionArray=['uttarakhand|Uttarakhand Power Corporation Ltd.(UPCL)'];
   }
   else if(s1.value=="wb")
   {
       var optionArray=['cse|CESC Limited','india|India Power Corporation Ltd.(Asansol)','west|West Bengal Electricity'];
   }

   for(var option in optionArray){
       var pair=optionArray[option].split("|");
       var newoption=document.createElement("option");

       newoption.value=pair[0];
       newoption.innerHTML=pair[1];
       s2.options.add(newoption);
   }
}