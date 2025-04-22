import { TarjetaCredito } from "./tarjetaCredito";
import { TransferenciaBancaria } from "./transferenciaBancaria";
import { IPago } from "./interfaces";
import { MercadoPago } from "./mercadoPago";
const pago1: IPago = new TarjetaCredito("Visa",1000, "Juan Perez", 123456789);
const pago2: IPago = new TransferenciaBancaria("Banco Santander",2000, "Maria Lopez", 987654321);
const pago3: IPago = new MercadoPago( "Mercado Pago", 3000, "Pedro Garcia", 456789123);



pago1.procesarPago();
pago1.cancelarPago();       
pago1.generarRecibo();
pago2.procesarPago();
pago2.cancelarPago();       
pago2.generarRecibo();
pago3.procesarPago();
pago3.cancelarPago();
pago3.generarRecibo();