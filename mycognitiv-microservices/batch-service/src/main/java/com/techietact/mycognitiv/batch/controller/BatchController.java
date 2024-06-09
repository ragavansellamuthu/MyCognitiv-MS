package com.techietact.mycognitiv.batch.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techietact.mycognitiv.batch.model.BatchModel;
import com.techietact.mycognitiv.batch.service.BatchService;
import com.techietact.mycognitiv.batch.util.CustomUtils;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/batch")
@RequiredArgsConstructor
public class BatchController {

	private final BatchService batchService;

	@PostMapping
	public ResponseEntity<?> createBatch(@Valid @RequestBody BatchModel model, BindingResult result) {
		if (result.hasErrors()) {
			return CustomUtils.badRequest(result);
		}
		return ResponseEntity.ok(batchService.createBatch(model));
	}

	@GetMapping("/{batchId}")
	public ResponseEntity<BatchModel> viewBatch(@PathVariable("batchId") long batchId) {
		return ResponseEntity.ok(batchService.viewBatch(batchId));
	}

	@PutMapping
	public ResponseEntity<?> updateBatch(@Valid @RequestBody BatchModel model, BindingResult result) {
		if (result.hasErrors()) {
			if (model != null) {
				long batchId = model.getBatchId();
				String batchName = model.getBatchName();
				if (batchId > 0 && StringUtils.hasText(batchName)
						&& batchService.isDuplicateBatchName(batchId, batchName)) {
					result.rejectValue("batchName", batchName, "Batch Name already Exists");
				}
			}
			return CustomUtils.badRequest(result);
		}
		return ResponseEntity.ok(batchService.updateBatch(model));
	}

	@DeleteMapping("/{batchId}/{deletedBy}")
	public ResponseEntity<Boolean> deleteBatch(@PathVariable("batchId") long batchId,
			@PathVariable("deletedBy") long deletedBy) {
		return ResponseEntity.ok(batchService.deleteBatch(batchId, deletedBy));
	}

	@GetMapping("/list")
	public ResponseEntity<List<BatchModel>> getAllBatchs() {
		return ResponseEntity.ok(batchService.listAllBatches());
	}

	@GetMapping("/page")
	public ResponseEntity<Page<BatchModel>> paginateBatches(
			@RequestParam(value = "pageIndex", required = true) int pageIndex,
			@RequestParam(value = "pageSize", required = true) int pageSize,
			@RequestParam(value = "attributeName", required = false) String attributeName,
			@RequestParam(value = "sortOrder", required = false) String sortOrder,
			@RequestParam(value = "searchText", required = false) String searchText) {
		return ResponseEntity
				.ok(batchService.paginateBatches(pageIndex, pageSize, attributeName, sortOrder, searchText));
	}

	@GetMapping("check-duplicate-batch-name/{batchName}")
	public ResponseEntity<Boolean> isDuplicateEmail(@PathVariable("batchName") String batchName) {
		return ResponseEntity.ok(batchService.isDuplicateBatchName(batchName));
	}

}
