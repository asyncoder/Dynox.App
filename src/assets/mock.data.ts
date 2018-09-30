import { Field, Box, Control, Section, Tab, Form, Entity } from "../app/core/models";

let fieldsClients: Field[];
let boxesClients1: Box[];
let boxesClients2: Box[];
let boxesClients3: Box[];
let boxesClients4: Box[];
let controlsClients1: Control[];
let controlsClients2: Control[];
let controlsClients3: Control[];
let controlsClients4: Control[];
let sectionsClients1: Section[];
let sectionsClients2: Section[];
let tabsClients: Tab[];
let formsClients: Form[];
let entities: Entity[];

fieldsClients = [
  {
    key: 1,
    id: "id",
    displayName: "Code"
  },
  {
    key: 2,
    id: "name",
    displayName: "Name"
  },
  {
    key: 3,
    id: "tel",
    displayName: "Telephone"
  },
  {
    key: 4,
    id: "observation",
    displayName: "Observation"
  }
];

controlsClients1 = [
  {
    key: 1,
    visible: true,
    readOnly: true,
    searchable: true,
    field: fieldsClients[0]
  },
  {
    key: 2,
    visible: true,
    readOnly: true,
    searchable: true,
    field: fieldsClients[1]
  },
  {
    key: 3,
    visible: true,
    readOnly: true,
    searchable: true,
    field: fieldsClients[2]
  }
];

controlsClients2 = [
  {
    key: 4,
    visible: true,
    readOnly: true,
    searchable: true,
    field: fieldsClients[3]
  }
];

boxesClients1 = [
  {
    key: 1,
    id: "box1",
    type: "detail",
    controls: controlsClients1
  },
  {
    key: 2,
    id: "box2",
    type: "detail",
    controls: controlsClients1
  }
];

boxesClients2 = [
  {
    key: 3,
    id: "box3",
    type: "grid",
    controls: controlsClients2
  }
];

boxesClients3 = [
  {
    key: 4,
    id: "box4",
    type: "grid",
    controls: controlsClients2
  }
];

sectionsClients1 = [
  {
    key: 1,
    id: "section_gle",
    displayName: "Section General",
    boxes: boxesClients1,
    order: 1    
  },
  {
    key: 2,
    id: "section_tel",
    displayName: "Section Tel",
    boxes: boxesClients2,
    order: 2    
  }
];

sectionsClients2 = [
  {
    key: 3,
    id: "section_obs",
    displayName: "Section Observation",
    boxes: boxesClients3,
    order: 1    
  }
];

tabsClients = [
  {
    key: 1,
    id: "gle",
    displayName: "General",
    order: 1,
    sections: sectionsClients1
  },
  {
    key: 2,
    id: "obs",
    displayName: "Observation",
    order: 1,
    sections: sectionsClients2
  }
]

formsClients = [
  {
    key: 1,
    id: "info",
    displayName: "Info",    
    tabs: tabsClients
  }
];

entities = [
  {
    key: 1,
    id: "client",
    displayName: "Client",
    fields: fieldsClients,
    forms: formsClients
  }
];

export default entities;