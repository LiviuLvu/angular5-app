export class LoggingService {
  logStatusChange(status: string) {
    console.info('Server status changed to: ', status);
  }  
}