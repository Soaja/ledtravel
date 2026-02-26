export default window.fetch.bind(window);
export const Headers = window.Headers;
export const Request = window.Request;
export const Response = window.Response;
export const FormData = window.FormData;
export const File = window.File;
export const Blob = window.Blob;
export class AbortError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AbortError';
  }
}
export class FetchError extends Error {
  constructor(message, type, systemError) {
    super(message);
    this.name = 'FetchError';
    this.type = type;
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
}
export const isRedirect = (code) => code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
