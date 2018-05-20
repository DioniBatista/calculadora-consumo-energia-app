export const labels = {
    updateStateButton: "Atualizar estado",
    consumption: "Consumo",
    myHome: "Minha Casa",
    settings: "Configurações",
    descriptionRoom: "Descrição do Cômodo",
    addCustomRoom: "Cômodo personalizado",
    addNewEquipment: "Novo equipamento",
    equipments: "Equipamentos"
}

export const titles = {
    myHome: "Minha Casa",
    newRoom: "Novo Cômodo da casa",
}

export const equipments = [
    {"id":"1", "description":"Lâmpada", "image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"2", "description":"Geladeira","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"3", "description":"Chuveiro","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"4", "description":"Televisão","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"5", "description":"Rádio","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"6", "description":"Microondas","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"1", "description":"Lâmpada2", "image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"2", "description":"Geladeira2","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"3", "description":"Chuveiro2","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"4", "description":"Televisão2","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"5", "description":"Rádio2","image":"", "voltage": "127", "power":"30","powerStandby":"10"},
    {"id":"6", "description":"Microondas2","image":"", "voltage": "127", "power":"30","powerStandby":"10"}
];

export const dataRooms =  [{codeRoom:"1",default:true, iconName:'bath',name:"Banheiro",equipments:[{"id":"1", "description":"Lâmpada", "image":"", "voltage": "127", "power":"30","powerStandby":"10"}]},
    {codeRoom:"2",default:true, iconName:'tv',name:"Sala",equipments:[]},
    {codeRoom:"3",default:true, iconName:'coffee',name:"Cozinha",equipments:[]},
    {codeRoom:"4",default:true, iconName:'bed',name:"Quarto",equipments:[]}];