# IDEAS
 Primer proyecto del grupo IDEAS. Creación de un sitio web integral con enfoque en Frontend, Backend, Bases de datos, SCRUM y buenas prácticas.

 ## BACKEND ENDPOINTS
 https://ideas-backend.vercel.app/

  ### POST /api/users/login
  LOGIN USUARIO.
  body{cardnumber:string, pin:string} (el pin para todos los usuarios es 1234) **devuelve** un JSON con los datos de usuarios he incluye un JWT.

  ### GET /api/users/balance
  BALANCE DE USUARIO.
  devuelve el saldo del usuario logeado, se debe enviar el header { 'Autorization': `Bearer ${JWT recibido al hacer el login}`} 

  ### GET /api/transactions?id=...
  TRANSACCIONES DE USUARIO.
  query id de usuario + headers: { 'Autorization': `Bearer ${JWT recibido al hacer el login}`} **devuelve** un JSON con todas las transacciones del usuario.
  
  ### POST /api/transactios/verify
  VERIFICA SI ES POSIBLE HACER TRANSACCION.
  body{monto: number, tarjeta_origen:string, tarjeta_destino:string} + headers: { 'Autorization': `Bearer ${JWT recibido al hacer el login}`} **devuelve** un mensaje en JSON (ej: {"message": "Transaccion valida.", "valid": true, "recipient_user_name": "Valentina", "recipient_user_last_name": "Perez"}).

  ### POST /api/transactions
  REGISTRA TRANSACCION DE USUARIO.
  body{monto: number, tarjeta_origen:string, tarjeta_destino:string} + headers: { 'Autorization': `Bearer ${JWT recibido al hacer el login}`} **devuelve** un mensaje en JSON (ej: {"message": "Transaccion realizada con exito.", "saldo": 6880, "valid": true }).



  ### **EXTRA** GET /api/users
  Devuelve todos los usuarios almacendaos en la base de datos, para poder hacer los testeos con estos.
