import {Component, ElementRef, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-svg-display',
  templateUrl: 'svg-display.component.html',
  styleUrls: ['./svg-display.component.scss']
})
export class SvgDisplayComponent implements OnChanges {

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private elementRef: ElementRef
  ) {

  }

  @Input()
  public svgPath: string = '';

  public svgContent: string = '';

  public containerId: string = 'svg-container';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['svgPath'])
      this.loadSvgContent();
  }

  private loadSvgContent() {
    fetch(this.svgPath)
      .then(response => response.text())
      .then(svgContent => {
        const container = this.elementRef.nativeElement.querySelector(`#${this.containerId}`);
        if (container) {
          container.innerHTML = svgContent;
        } else {
          console.error(`Container with id ${this.containerId} not found.`);
        }
      })
      .catch(error => console.error('Error loading SVG:', error));
  }
}
