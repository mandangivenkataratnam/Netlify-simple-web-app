import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  omdbBaseUrl = "http://www.omdbapi.com";
  omdbApiKey = "3b8dd593"; 
  
  tmdbBaseUrl = "https://api.themoviedb.org/3";
  tmdbApiKey = "08cc33bd5ae3a747598ce2ad84376e66";

 
  getOmdbMovieDetails(title: string): Observable<any> {
    return this.http.get(`${this.omdbBaseUrl}/?apikey=${this.omdbApiKey}&t=${title}`);
  }
  
  getOmdbMovieDetailsById(id: string): Observable<any> {
    return this.http.get(`${this.omdbBaseUrl}/?apikey=${this.omdbApiKey}&i=${id}`);
  }
  
  getOmdbMoviePoster(id: string): Observable<any> {
    return this.http.get(`${this.omdbBaseUrl}/?apikey=${this.omdbApiKey}&i=${id}&plot=full`);
  }
  
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/trending/all/week?api_key=${this.tmdbApiKey}`);
  }
  
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/trending/movie/day?api_key=${this.tmdbApiKey}`);
  }
  
  getSearchMovie(data: any): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/search/movie?api_key=${this.tmdbApiKey}&query=${data.movieName}`);
  }
  
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/movie/${data}?api_key=${this.tmdbApiKey}`);
  }
  
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/movie/${data}/videos?api_key=${this.tmdbApiKey}`);
  }
  
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/movie/${data}/credits?api_key=${this.tmdbApiKey}`);
  }
  
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=28`);
  }
  
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=12`);
  }

  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=16`);
  }
 
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=35`);
  }
  
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=99`);
  }
 
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=878`);
  }
  
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=53`);
  }
}
