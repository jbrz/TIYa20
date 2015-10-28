import $ from 'jquery';

const APP_ID = 'hRLXMFrCHeHRRhZBScHwsQPWORlczeeohy26VVNv';
const API_KEY = 'WUo8qzRRQfBO0dOR4inBl77g1SyY27p10tSFPfTa';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-KEY': API_KEY,
  }
});