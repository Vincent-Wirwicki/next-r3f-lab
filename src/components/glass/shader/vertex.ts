export const vertex = /*glsl*/ `
    
    // varying vec3 vTest;
    varying vec2 vUv;
    varying vec3 csm_vPos;

    void main(){
        csm_vPos = position;
        vUv = uv;
        // vTest = vec3(1.);
        // csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

`;
