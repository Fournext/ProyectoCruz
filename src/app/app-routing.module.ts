// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VenderComponent } from './vender/vender.component';
import { LayoutComponent } from './layout/layout.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { SignInComponent } from './new-User/sign-in.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AddNewProveedorComponent } from './add-new-proveedor/add-new-proveedor.component';
import { AddNewAlmacenComponent } from './add-new-almacen/add-new-almacen.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { FormVentaComponent } from './form-venta/form-venta.component';
import { FacturaComponent } from './factura/factura.component';
import { InventarioComponent } from './inventario/inventario.component';
import { NewInventarioComponent } from './new-inventario/new-inventario.component';
import { NotaSalidaComponent } from './nota-salida/nota-salida.component';
import { UpdNewNotaSalidaComponent } from './upd-new-nota-salida/upd-new-nota-salida.component';
import { UserPermisosComponent } from './user-permisos/user-permisos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ComprarComponent } from './comprar/comprar.component';
import { NewCompraComponent } from './new-compra/new-compra.component';
import { BoletaCompraComponent } from './boleta-compra/boleta-compra.component';
import { ReporteCompraComponent } from './reporteCompra/reportes.component';
import { ReporteVentaComponent } from './reporte-venta/reporte-venta.component';
import { ReporteActividadComponent } from './reporte-actividad/reporte-actividad.component';
import { AnalisisComponent } from './analisis/analisis.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch:'full'},
  { path: 'login',component: LoginComponent},

  { path: 'home', component: LayoutComponent, children: [
    //{ path: '', redirectTo: '', pathMatch: 'full' }, // Redirige a la página de almacenes por defecto
    { path: 'almacen', component: AlmacenesComponent },// Ruta para el componente de almacenes 
    { path: 'proveedores', component: ProveedorComponent },
    { path: 'vender', component : VenderComponent }, 
    { path: 'formventa', component : FormVentaComponent }, 
    { path: 'factura/:codigo', component : FacturaComponent }, 
    { path: 'productos', component : ProductoComponent },  
    { path: 'registro', component : SignInComponent },
    { path: 'newPassword', component : NewPasswordComponent},
    { path: 'add', component : AddNewProveedorComponent},
    { path: 'edit/:codigo', component : AddNewProveedorComponent},
    { path: 'addAlma', component : AddNewAlmacenComponent},
    { path: 'editAlma/:id', component : AddNewAlmacenComponent},
    { path: 'bitacora', component : BitacoraComponent},
    { path: 'inventario', component : InventarioComponent},
    { path: 'newInventario', component : NewInventarioComponent},
    { path: 'notasalida', component : NotaSalidaComponent},
    { path: 'Newnotasalida', component : UpdNewNotaSalidaComponent},
    { path: 'Updnotasalida/:cod', component : UpdNewNotaSalidaComponent},
    { path: 'userpermisos/:nom', component : UserPermisosComponent},
    { path: 'usuario', component : UsuarioComponent},
    { path: 'comprar', component : ComprarComponent},
    { path: 'Newcompra', component : NewCompraComponent},
    { path: 'BoletaCompra/:cod', component : BoletaCompraComponent},
    { path: 'reportecompra', component : ReporteCompraComponent},
    { path: 'reporteventa', component : ReporteVentaComponent},
    { path: 'reporteactividad', component : ReporteActividadComponent},
    { path: 'analisis', component : AnalisisComponent},
  ]},
  { path: '**',redirectTo: 'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
