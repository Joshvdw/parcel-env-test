// This function will be converted into a string so
// the scope is limited to this function only.

// To pass external data use the 'input' function. See other examples.

// original code
// export function spCode()  {
//   // Put your Shader Park Code here
//   rotateY(mouse.x * PI / 2 + time*.5);
//   rotateX(mouse.y * PI / 2);
//   metal(.5);
//   shine(.4);
//   color(getRayDirection()+.2);
//   rotateY(getRayDirection().y*4+time)
//   boxFrame(vec3(.4), .02);
//   expand(.02);
//   blend(nsin(time)*.6)
//   sphere(.2);
// };

export function spCode() {
  // Put your Shader Park Code here
  let scale = 1.5;
  setMaxIterations(5);
  let s = getSpace();
  //let s = getRayDirection();
  //setStepSize(.1);
  rotateY((mouse.x * PI) / 2 + time * 0.5);
  rotateX((mouse.y * PI) / 2);
  setMaxIterations(66);
  rotateX(s.y * 10);
  //let n = noise(s*10+time);
  //let n = noise(s*5+vec3(0,time,0));
  //let n = noise(s*scale+vec3(0,time,0));
  //let n = noise(s*scale+vec3(0,time,0) + noise(s*scale+vec3(0,time,0)));
  //let n = noise(getSpace()*scale+vec3(0,time,0) + noise(s*scale+vec3(0,time,0)));
  let n = noise(
    getSpace() * scale +
      vec3(0, time, 0) +
      fractalNoise(s * scale + vec3(0, time * 0.1, 0))
  );
  color(vec3(n) * 0.5 + 0.5 + normal * 0.6);
  color(vec3(n) * 0.5 + 0.5 + normal * 0.2 + vec3(n) * 0.2);
  color(s);
  displace(0, sin(s.x * 8) * 0.6, 0);
  sphere(1.1 + 0.1 * n);
  expand(0.05);
}
