# TP 5 – Primer servidor con Node.js y Express

## Descripción
Este proyecto es un servidor HTTP básico construido con Node.js y Express. Permite:

- Mostrar un mensaje de bienvenida en la ruta raíz.
- Devolver la hora actual en formato `La hora es HH:MM`.
- Devolver la fecha y hora completas en formato `DD/MM/AAAA:HH:MM:SS`.
- Gestionar rutas no definidas con un mensaje de error 404.

## Comandos de uso
- GET | / | Devuelve “Bienvenido a mi servidor”.
- GET | /hora | Muestra la hora actual (Hora() en time.js). ​
- GET | /fecha-completa | Muestra fecha y hora completas (FechaExacta() en time.js). ​
- * | Cualquier otra | Devuelve “Error 404: Ruta no encontrada”.  ​
