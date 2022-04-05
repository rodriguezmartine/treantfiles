+++
title = "Users"
weight = 12


[dataset] # this key will in the chart shortcode
  fileLink = "content/roles.csv" # path to where csv is stored
  colors = ["#627c62", "#11819b", "#ef7f1a", "#4e1154", "#4e1154"]
  columnTitles = ["Permisos/Roles","Developer","Infra Admin","Project Admin","Company Admin"]
  baseChartOn = 5 # number of column the chart(s) and graph should be drawn from
  piechart = true
  doughnutchart = true
  bargraph = true
  title = "Roles y Permisos"
  table = true 

+++


# Usuarios

Esta sección permite gestionar los usuarios de su compania, asignarles roles dependiendo del perfil de cada uno de sus colaboradores. Cada uno de estos usuarios podrá realizar o ejecutar acciones dentro de **Treant** según su **rol** lo permita, 
para ver que permisos abarca cada rol mire la sección [Roles y permisos](#roles-y-permisos).

***Nota:*** Para poder realizar operaciones con usuarios, ustede deberá tener permisos de *"Project Admin"* o superior.

#### Agregar usuarios a tu compania

Dentro del menú de usuario seleccione **User**, usted observará la lista de usuarios que existen en su company y
el rol que cada usuario tiene. 

{{< picture "listadeusuarios.png" "listadeusuarios.png" "Image alt text" >}}


Para agregar un usuario seleccione **"Add Collaborator"** a la derecha de su pantalla. 

{{< picture "add.png" "add.png" "Image alt text" >}}

Ingrese los parámetros:

* **Name**: Nombre del usuario
* **Email**: Dirección de correo electrónico. Ingrese uno válido ya que es necesario para envío de notificaciones.
* **Rol**: Serie de permisos que se le asignan al usuario. Por defecto el rol es **Developer**.

{{< picture "new_collaborator.png" "new_collaborator.png" "Image alt text" >}}

Una vez ingresado los valor presione **Save**. Se le eviará un email al nuevo usuario con los datos de acceso a **Treant**.

#### Modificar datos del usuario

Mofique los valores de los usuarios, para eso en el listado de usuario de su compania selecione la opcion de editar:

{{< picture "edit.png" "edit.png" "Image alt text" >}}

En el formulario de edicion modifique los valores del usuario y precione **Save**. El usuario podrá observar sus nuevos 
privilegios en el próximo inicio de sesión.

{{< picture "edit_form.png" "edit_form.png" "Image alt text" >}}



#### Eliminar usuario

Elimine usuario de su compania simplemente seleccionando la "cruz" dentro de cada box de usuario:

{{< picture "delete.png" "delete.png" "Image alt text" >}}

Confirme la operación y vuelva al listado de usuarios.

{{< picture "delete_confirm.png" "delete_confirm.png" "Image alt text" >}}


#### Roles y permisos

**Treant** administra los permisos de cada usuario agrupandolos por roles. Cada rol asigna al usuario una serie de operaciones permitidas dentro de **Treant**. Estos roles y permisos estan asociados a los que cada compania tenga asignada en sus respectivas susbcripciones del servicio en la nube, independientemente del proveedor que sea.




Entre los roles podemos encontrar:

* **Company admin:** Este rol es el de mayor jerarquía, el mismo tiene los permisos para realizar todas las operaciones dentro la compania.
* **Developer:** Creación de infraestructura y desplegar nuevas versiones de código.
* **Infra admin:** Crear, modificar y eliminar infraestructura mas el rol ***Developer***.
* **Project admin:** Crear, modificar y eliminar infraestructura, gestión de usuarios, mas los roles ***Infra admin*** y ***Developer***.

{{< grid "5 mt-1 mb-1" >}}
  {{< chart "dataset">}}
{{< /grid >}}
