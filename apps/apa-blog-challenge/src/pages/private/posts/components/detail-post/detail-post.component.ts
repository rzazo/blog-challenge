import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IDetailPost } from "../../interfaces";

@Component({
  selector: "detail-post",
  templateUrl: "./detail-post.component.html",
  styleUrls: ["./detail-post.component.scss"],
})
export class DetailPostComponent implements OnInit {
  @Input() public model: IDetailPost | any;
  @Input() public hasOpen: boolean = false;

  @Output() public onClose: EventEmitter<any> = new EventEmitter<any>();

  public detailUser: any;

  constructor() {}

  ngOnInit(): void {}

  public closeSideBar() {
    this.onClose.emit();
  }

  public openDetailUser() {
    this.detailUser = this.model.user;
  }

  public onCloseDetailUser() {
    this.detailUser = null;
  }
}
