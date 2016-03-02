// 1 fps = 0.3048 m/s
var fpsms = 0.3048;
// 1 m/s = 3.28083989501312 fps
var msfps = 3.28083989501312;

//All the accepted weight
var weight = [12,20,23,25,28,30,33,36,40,43,50];

//Gravity aceleration on sea level
var g = 9.80665;

//Time to bb fall from 1 meter to the ground
var time = 0.4516;

function fpsToJoule(fps,weight) {
	//gram to kilogram
	var mass = weight/1000; 
	//Velocity in m/s
	var velo = fps*fpsms;
	//svelo is the square of velocity (V^2)
	var svelo = velo*velo;

	//Energy is (mass*(velocity^2))/2 (kinect energy)
	var energy = (mass*svelo)/2;


	jouleToFps(energy);

}

function jouleToFps(energy){

	for(var i=0;i<weight.length;i++){
		//weight to kilogram
		var mass = weight[i]/100000;
		//velocity is the square of 2*energy/mass
		var velocity 	= Math.sqrt(2*energy/mass);
		var fps 		= velocity*msfps;

		document.getElementById("ms"+weight[i]).innerHTML = Math.round(velocity*100)/100;
		document.getElementById("fps"+weight[i]).innerHTML = Math.round(fps*100)/100;
		document.getElementById("ranme"+weight[i]).innerHTML = Math.round(velocity*time);
		document.getElementById("ranfe"+weight[i]).innerHTML = Math.round(fps*time);

	}


}

function updateTime(height)
{
	// s = s0 + v0t+a(t^2)/2
	// v0 = 0
	// s0 = 0
	// s = height
	// a = g
	// t² = 2*height/g
	// t = sqrt(2*height/g)

	time = Math.sqrt(2*height/g);
}


