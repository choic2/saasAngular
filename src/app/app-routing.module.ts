import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ReportComponent } from './report/report.component';
import {questionBankTableComponent} from './ques-bank-table/ques-bank-table.component';
import {QuestionComponent} from './question/question.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TakeTestComponent } from './take-test/take-test.component';
import {StudentdashboardComponent} from './studentdashboard/studentdashboard.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'report/:userid/reports/:questionBankID', component: ReportComponent},
  { path: 'professor_dashboard', component: questionBankTableComponent },
  { path: 'create_question/:questionBankID', component: QuestionComponent },
  { path: 'test/detail/:id', component: TestDetailsComponent},
  { path: 'test/:questionbankid', component: TakeTestComponent },
  { path: 'student_dashboard', component: StudentdashboardComponent },
  { path: '', component: questionBankTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
