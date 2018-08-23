function saveOnClick() {
	var firebaseRef=firebase.database().ref("CS/Sessionl");
	firebaseRef.child("pic/name").set("Root")
	firebaseRef.child("pic/url").set("Root")

}
window.onload=function(){
	var firebaseRef=firebase.database().ref("CS/Sessional");
    firebaseRef.once('value').then(function(dataSnapshot){
    	console.log(dataSnapshot.val());
    	//saveOnClick();
    	
    });
}
function insertd(name,url){
	var firebaseRef=firebase.database().ref("CS/Sessionl");
	firebaseRef.push({
	name:name,
	url:url,
});
	console.log("success");
}