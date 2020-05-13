import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSelect,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatIconModule,
} from "@angular/material";
import { LedgerDataComponent } from "./components/ledger-data/ledger-data.component";
import { BalanceInfoComponent } from "./components/balance-info/balance-info.component";
import { LedgerItemComponent } from "./components/ledger-data/ledger-item/ledger-item.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RangeBarChartComponent } from './components/range-bar-chart/range-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LedgerDataComponent,
    LedgerItemComponent,
    BalanceInfoComponent,
    SidenavComponent,
    RangeBarChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
