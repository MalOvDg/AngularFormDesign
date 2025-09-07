import { Injectable, signal, computed } from '@angular/core';

export interface FormQuestion {
  question: string;
  type: 'text' | 'multiple-choice';
  required: boolean;
  options?: string[];
}

export interface FormData {
  title: string;
  questions: FormQuestion[];
  submitted: boolean;
}

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private _form = signal<FormData | null>(null);

  readonly form = computed(() => this._form());

  setForm(data: FormData) {
    this._form.set({ ...data, submitted: false });
  }

  markSubmitted() {
    const current = this._form();
    if (current) {
      this._form.set({ ...current, submitted: true });
    }
  }
}





