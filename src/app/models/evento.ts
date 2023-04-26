import { Persona } from "./persona";
import { Mobiliario } from "./mobiliario";

export interface Evento {
    "IdEventoOK": string;
    "fechaEvento": Date;
    "cliente": Persona;
    "mobiliario"?: [{
        "objeto": Mobiliario,
        "cantidad": number,
        "importe": number
    }];
    "nota": string;
    "total": number;
    "pagado": boolean;
    "aCuenta": number;
}
