import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from "./api.service";

describe("ApiService", () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    })
    apiService = TestBed.inject(ApiService);
  });

  it("should be created", () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  })

  it("should retrive 44 playlists from API", (done: DoneFn) => {
    apiService.getAllPlaylists().subscribe(res => {
      expect(res.playlists.length).toBe(44);
      done();
    })
  });
});
