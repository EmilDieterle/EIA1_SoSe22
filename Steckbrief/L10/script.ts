window.addEventListener("load", function (): void {

document.querySelector("fa-regular fa-circle").addEventListener("click", kreisAnkreuzen);
function kreisAnkreuzen(): void {
     document.querySelector("fa-regular fa-circle").classList.add("hidden");
     document.querySelector("fa-regular fa-circle-check").classList.remove("hidden");
     console.log(kreisAnkreuzen);
    }

document.querySelector("fa-regular fa-circle-check").addEventListener("click", kreisNichtAnkreuzen);
function kreisNichtAnkreuzen(): void {
         document.querySelector("fa-regular fa-circle-check").classList.add("hidden");
         document.querySelector("fa-regular fa-circle").classList.remove("hidden");
        }
        
});