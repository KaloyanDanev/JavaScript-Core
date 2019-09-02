const petService = (() => {
 function addPet () {
    return kinvey.post('appdata', 'pets', 'kinvey', data)
 }
 return {
     addPet
 }
})();