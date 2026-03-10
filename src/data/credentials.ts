export interface Credential {
  name: string;
  issuer: string;
  status: "active" | "in-progress";
}

export const credentials: Credential[] = [
  {
    name: "Class A CDL",
    issuer: "State of Florida",
    status: "active",
  },
  {
    name: "TCIA Emergency Tree Responder",
    issuer: "Tree Care Industry Association",
    status: "active",
  },
  {
    name: "ISA Certified Arborist",
    issuer: "International Society of Arboriculture",
    status: "in-progress",
  },
  {
    name: "FWC Authorized Gopher Tortoise Agent",
    issuer: "Florida Fish & Wildlife Conservation Commission",
    status: "in-progress",
  },
];
