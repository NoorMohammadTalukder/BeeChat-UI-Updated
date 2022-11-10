import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
 
const connection = new HubConnectionBuilder()
  .withUrl('http://localhost:5074/hub')
  .configureLogging(LogLevel.Information)
  .build()
 
connection.start()