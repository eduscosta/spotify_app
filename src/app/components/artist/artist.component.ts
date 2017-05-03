import { Album } from './../../../../Album';
import { Artist } from './../../../../Artist';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  moduleId:module.id,
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
    id:string;
    artist:Artist[];
    albums: Album[];
    constructor(
        private _spofityService:SpotifyService, 
        private _route:ActivatedRoute){
    }
    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spofityService.getArtist(id)
                    .subscribe(artist => {
                        this.artist=artist;
                    })
            })
    }
}
